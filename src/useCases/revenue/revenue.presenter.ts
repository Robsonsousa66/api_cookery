import { MessageService } from "src/service/message.service"
import ListResponse from "./dtos/list-response"

export class RevenuePresenter {
  static list(data: ListResponse[]) {
    return data.map(value => {
      return {
        id: value.id,
        name: value.name,
        description: value.description,
        ingredients: value.ingredients.map((ingredient) => {
          return {
            id: ingredient.id,
            quantity: ingredient.quantity,
            material: ingredient.material.name,
            description: ingredient.description,
          }
        })
      }
    })
  }

  static notFound() {
    return {
      message: MessageService.revenue_not_found
    }
  }

  static materialNotFound() {
    return {
      message: MessageService.material_not_found
    }
  }

  static ingredientNotFound() {
    return {
      message: MessageService.ingredient_not_found
    }
  }

  static created() {
    return {
      created: true,
      message: MessageService.revenue_created_success
    }
  }

  static createdIngredient() {
    return {
      created: true,
      message: MessageService.ingredient_created_success
    }
  }

  static updated() {
    return {
      updated: true,
      message: MessageService.revenue_updated_success
    }
  }

  static updatedIngredient() {
    return {
      created: true,
      message: MessageService.ingredient_updated_success
    }
  }

  static deleted() {
    return {
      deleted: true,
      message: MessageService.revenue_deleted_success
    }
  }

  static deletedIngredient() {
    return {
      created: true,
      message: MessageService.ingredient_deleted_success
    }
  }
}