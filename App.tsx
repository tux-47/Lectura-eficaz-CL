import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { TOTAL_TIME, TOTAL_LIVES, CASES, TRANSLATIONS } from './constants';
import { Header } from './components/Header';
import { StartScreen } from './components/StartScreen';
import { InstructionScreen } from './components/InstructionScreen';
import { LevelView } from './components/LevelView';
import { FeedbackModal } from './components/FeedbackModal';
import { EndScreen } from './components/EndScreen';
import { GameOverScreen } from './components/GameOverScreen';
import { GameState } from './types';

const MAX_PLAYS = CASES.length;

function App() {
    const [gameState, setGameState] = useState<GameState>('manual');
    const [currentLevelIndex, setCurrentLevelIndex] = useState(0);
    const [lives, setLives] = useState(TOTAL_LIVES);
    const [timeLeft, setTimeLeft] = useState(TOTAL_TIME);
    const [language, setLanguage] = useState<'en' | 'es'>('en');
    const [lastAnswerCorrect, setLastAnswerCorrect] = useState(false);
    const [endReason, setEndReason] = useState<'time' | 'lives' | 'win'>('win');
    const [caseIndex, setCaseIndex] = useState(0);
    const [playCount, setPlayCount] = useState(1);

    const translations = useMemo(() => TRANSLATIONS[language], [language]);
    const currentCase = useMemo(() => CASES[caseIndex], [caseIndex]);
    
    useEffect(() => {
        if (gameState !== 'playing') return;

        if (timeLeft <= 0) {
            setGameState('lost');
            setEndReason('time');
            return;
        }

        const timer = setInterval(() => {
            setTimeLeft(prevTime => prevTime - 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [gameState, timeLeft]);

    const resetGame = useCallback(() => {
        if (playCount >= MAX_PLAYS) {
          setGameState('gameOver');
          return;
        }
        setPlayCount(prev => prev + 1);
        setCaseIndex(prev => (prev + 1) % CASES.length);
        setGameState('start');
        setCurrentLevelIndex(0);
        setLives(TOTAL_LIVES);
        setTimeLeft(TOTAL_TIME);
    }, [playCount]);

    const handleRestartFromBeginning = useCallback(() => {
        setPlayCount(1);
        setCaseIndex(0);
        setCurrentLevelIndex(0);
        setLives(TOTAL_LIVES);
        setTimeLeft(TOTAL_TIME);
        setGameState('manual'); // Go back to manual on full restart
    }, []);

    const handleInstructionAccept = () => {
        setGameState('start');
    };

    const handleStart = () => {
        setGameState('playing');
    };

    const toggleLanguage = useCallback(() => {
        setLanguage(prev => prev === 'en' ? 'es' : 'en');
    }, []);

    const handleAnswer = useCallback((selectedIndex: number) => {
        const isCorrect = currentCase.levels[currentLevelIndex].correctAnswerIndex === selectedIndex;
        setLastAnswerCorrect(isCorrect);
        
        if (!isCorrect) {
            const newLives = lives - 1;
            setLives(newLives);
            if (newLives <= 0) {
                setGameState('lost');
                setEndReason('lives');
                return;
            }
        }
        setGameState('feedback');
    }, [currentLevelIndex, lives, currentCase]);
    
    const handleFeedbackContinue = () => {
        if (currentLevelIndex + 1 >= currentCase.levels.length) {
            setGameState('won');
            setEndReason('win');
        } else {
            setCurrentLevelIndex(prev => prev + 1);
            setGameState('playing');
        }
    };

    const renderContent = () => {
        const currentLevel = currentCase.levels[currentLevelIndex];
        switch (gameState) {
            case 'manual':
                return <InstructionScreen onStart={handleInstructionAccept} translations={translations} />;
            case 'start':
                return <StartScreen onStart={handleStart} translations={translations} caseTitle={currentCase.title[language]} imageUrl={currentCase.imageUrl} language={language} />;
            case 'playing':
                return (
                    <main className="flex-grow flex flex-col items-center w-full">
                        <LevelView 
                            level={currentLevel} 
                            language={language}
                            onAnswer={handleAnswer} 
                            translations={translations}
                        />
                    </main>
                );
            case 'feedback':
                return (
                    <>
                        <main className="flex-grow flex flex-col items-center w-full opacity-30 pointer-events-none">
                            <LevelView
                                level={currentLevel}
                                language={language}
                                onAnswer={() => {}} 
                                translations={translations}
                            />
                        </main>
                        <FeedbackModal 
                            isCorrect={lastAnswerCorrect} 
                            onNext={handleFeedbackContinue}
                            translations={translations}
                            level={currentLevel}
                            language={language}
                        />
                    </>
                );
            case 'won':
                return <EndScreen onNextCase={resetGame} onRestartFromBeginning={handleRestartFromBeginning} won={true} reason={endReason} translations={translations} playCount={playCount} maxPlays={MAX_PLAYS} />;
            case 'lost':
                return <EndScreen onNextCase={resetGame} onRestartFromBeginning={handleRestartFromBeginning} won={false} reason={endReason} translations={translations} playCount={playCount} maxPlays={MAX_PLAYS} />;
            case 'gameOver':
                return <GameOverScreen translations={translations} onRestart={handleRestartFromBeginning} />;
            default:
                return null;
        }
    };

    return (
        <div className="bg-noir-bg min-h-screen flex flex-col font-body">
            { (gameState === 'playing' || gameState === 'feedback') && 
                <Header 
                    lives={lives} 
                    timeLeft={timeLeft} 
                    language={language}
                    toggleLanguage={toggleLanguage}
                    translations={translations}
                /> 
            }
            {renderContent()}
        </div>
    );
}

export default App;