import { MessageService } from "src/service/message.service"
import ListResponseDTO from "./dtos/list-response.dto"

export class MaterialPresenter {
  static list(data: ListResponseDTO[]) {
    return data.map(value => {
      return {
        id: value.id,
        name: value.name
      }
    })
  }

  static notFound() {
    return {
      message: MessageService.material_not_found
    }
  }

  static created() {
    return {
      created: true,
      message: MessageService.material_created_success
    }
  }

  static updated() {
    return {
      updated: true,
      message: MessageService.material_updated_success
    }
  }

  static notDeleteBoundIngredient() {
    return {
      deleted: false,
      message: MessageService.material_deleted_bound_ingredient
    }
  }

  static deleted() {
    return {
      deleted: true,
      message: MessageService.material_deleted_success
    }
  }
}