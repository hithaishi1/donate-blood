import mongoose from 'mongoose'

const DonorSchema = new mongoose.Schema({
  // Personal Information
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  bloodType: { type: String, required: true },
  
  // Health Information
  weight: { type: Number, required: true },
  height: { type: Number, required: true },
  lastDonationDate: { type: Date },
  hasRecentSurgery: { type: Boolean, default: false },
  recentSurgeryDetails: { type: String },
  hasChronicdisease: { type: Boolean, default: false },
  chronicDiseaseDetails: { type: String },
  currentMedications: { type: String },
  
  // Medical History
  hasDiabetes: { type: Boolean, default: false },
  hasHeartDisease: { type: Boolean, default: false },
  hasHIV: { type: Boolean, default: false },
  hasHepatitis: { type: Boolean, default: false },
  hasTB: { type: Boolean, default: false },
  hasAsthma: { type: Boolean, default: false },
  
  // Lifestyle
  isSmoker: { type: Boolean, default: false },
  alcoholConsumption: { type: String },
  
  // Emergency Contact
  emergencyContact: {
    name: { type: String, required: true },
    phone: { type: String, required: true },
    relation: { type: String, required: true }
  }
}, {
  timestamps: true
})

export default mongoose.models.Donor || mongoose.model('Donor', DonorSchema) 