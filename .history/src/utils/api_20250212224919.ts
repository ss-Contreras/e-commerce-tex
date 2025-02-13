import axios from 'axios'
import { Category } from '@/utils/types'

// Base de todos los endpoints de Category
const categoriaApi = axios.create({
    baseURL: 'https://localhost:7119/api/Category',
    headers:{
        'Content-Type': 'application/json',
    },
    httpsAgent: new (require('https').Agent)({
        rejectUnauthorized: false,
    })
})