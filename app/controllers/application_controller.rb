class ApplicationController < ActionController::API
  rescue_from ActiveRecord::RecordNotFound, with: :rescue_from_record_not_found
  rescue_from ActiveRecord::RecordInvalid, with: :rescue_from_invalid_record

  private

  def rescue_from_invalid_record(exception)
    render json: { errors: exception.record.errors.full_messages }, status: :unprocessable_entity
  end

  def rescue_from_record_not_found(exception)
    render json: { errors: "#{exception.model} not found" }, status: :not_found
  end
end
