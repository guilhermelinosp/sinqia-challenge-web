import { DateTime } from 'luxon'

export interface ResponseSucessRequest {
	data: ResponseAttraction[]
}

export interface ResponseAttraction {
	attractionId: string
	name: string
	description: string
	city: string
	state: string
	location: string
	createdAt: DateTime
	updatedAt: DateTime
}
