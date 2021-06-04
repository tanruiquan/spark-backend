const Question = require('../models/question')

const initialQuestions = [
  {
    id: 1,
    category: ['solo', 'icebreakers'],
    question: 'Which of these animals come closest to being your spirit animal?',
    isPicture: true,
    topic: 'animal'
  },
  {
    id: 2,
    category: ['icebreakers', 'this-or-that'],
    question: 'Are you a morning person or a night person?',
    isPicture: true,
    this: 'Morning',
    that: 'Night'
  },
  {
    id: 3,
    category: ['icebreakers', 'this-or-that'],
    question: 'Do you prefer coffee or tea?',
    isPicture: true,
    this: 'Coffee',
    that: 'Tea'
  },
  {
    id: 4,
    category: ['this-or-that', 'deep'],
    question: 'Is happiness or fulfillment more important to you?',
    isPicture: false,
    this: 'Happiness',
    that: 'Fulfilment'
  },
  {
    id: 5,
    category: ['this-or-that', 'deep'],
    question: 'Are you the type to follow your heart or follow your brain?',
    isPicture: false,
    this: 'Follow your heart',
    that: 'Follow your brain'
  },
  {
    id: 6,
    category: ['deep'],
    question: 'Why do you think we exist?',
    isPicture: false
  }
]

const nonExistingId = async () => {
  const question = new Question({ category: 'willremovethissoon', question: 'willremovethissoon?' })
  await question.save()
  await question.remove()

  return question._id.toString()
}

const questionsInDb = async () => {
  const questions = await Question.find({})
  return questions.map(question => question.toJSON())
}

module.exports = {
  initialQuestions,
  nonExistingId,
  questionsInDb
}