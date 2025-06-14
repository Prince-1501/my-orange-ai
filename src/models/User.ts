import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  image: String,
  preferredLanguage: {
    type: String,
    enum: ['hindi', 'english'],
    default: 'english',
  },
  subjects: [{
    name: String,
    progress: Number,
    chapters: [{
      name: String,
      progress: Number,
      lastAccessed: Date,
    }],
  }],
  quizResults: [{
    subject: String,
    chapter: String,
    score: Number,
    totalQuestions: Number,
    date: Date,
  }],
  savedNotes: [{
    subject: String,
    chapter: String,
    content: String,
    language: String,
    createdAt: Date,
  }],
  doubtHistory: [{
    question: String,
    answer: String,
    subject: String,
    chapter: String,
    language: String,
    createdAt: Date,
  }],
  streak: {
    current: Number,
    longest: Number,
    lastPracticeDate: Date,
  },
}, {
  timestamps: true,
});

export default mongoose.models.User || mongoose.model('User', UserSchema); 