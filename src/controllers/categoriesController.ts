import {Request, Response} from 'express'
import { getPaginationParams } from '../helpers/getPaginationParams'
import { categoyService } from '../services/categoryService'

export const categoriesController = {
  index: async (req: Request, res: Response) => {
    const [page, perPage] = getPaginationParams(req.query)

    try {
      const paginatedCategories = await categoyService.findAllPaginated(page, perPage)
      
      return res.json({
        paginatedCategories
      })
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message})
      }
    }
  }
}