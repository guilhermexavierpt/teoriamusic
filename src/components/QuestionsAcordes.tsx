import React, { useState } from 'react';
import { questionsAcordes } from './Objetos/QuestionsAcordes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../CSS/QuestionsAcordes.css';

type QuestionsAcordes = {
    [key: number]: {
        question: string;
        options: string[];
        answer: string;
    };
};

const QuestionsAcordes: React.FC = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);

    const handleAnswerSelect = (index: number) => {
        const newSelectedAnswers = [...selectedAnswers];
        newSelectedAnswers[currentQuestion] = index;
        setSelectedAnswers(newSelectedAnswers);
    };

    const currentQuestionKey = Object.keys(questionsAcordes)[currentQuestion];
    const currentAnswers = questionsAcordes[
        parseInt(currentQuestionKey) as keyof typeof questionsAcordes
    ];

    const renderAnswers = () => {
        return currentAnswers.options.map((answer, index) => (
            <div className="answer" key={index}>
                <input
                    type="radio"
                    name={`answer-${currentQuestion}`}
                    id={`answer-${currentQuestion}-${index}`}
                    value={index}
                    checked={selectedAnswers[currentQuestion] === index}
                    onChange={() => handleAnswerSelect(index)}
                />
                <label htmlFor={`answer-${currentQuestion}-${index}`}>{answer}</label>
            </div>
        ));
    };

    const handleNextQuestion = () => {
        const selectedAnswer = selectedAnswers[currentQuestion];
        const correctAnswerIndex = currentAnswers.options.findIndex((option) => option === currentAnswers.answer);
        if (currentQuestion < Object.keys(questionsAcordes).length - 1) {
            setCurrentQuestion(currentQuestion + 1);
            setSelectedAnswers([]);

            if (selectedAnswer === correctAnswerIndex) {
                toast.success('Parabéns, você acertou a pergunta!');
            }
        } else {
            toast.success('Parabéns, você concluiu o Quiz!');
        }
    };


    return (
        <div>
            <div className="question-container">
                <h2 className="answer ">{currentAnswers.question}</h2>
                <form>{renderAnswers()}</form>
            </div>
            <div className="button-container">
                {currentQuestion < Object.keys(questionsAcordes).length - 1 ?
                    (
                        <button className="next-button" onClick={handleNextQuestion}>Próxima</button>
                    ) : (
                        <button className="next-button">Finalizar</button>
                    )}
            </div>
            <ToastContainer />
        </div>
    );
};

export default QuestionsAcordes;
