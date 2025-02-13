import axios from 'axios'
import { Category } from '@/utils/types'

const categoriaApi = axios.create({
    baseURL: 'https://localhost:7119/api/Category'
})