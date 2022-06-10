import { gql } from '@apollo/client';

export const GET_CHARECTER = gql`
	query getCharacters {
		characters(page: 1, filter: { name: "", status: "" }) {
			info {
				count
			}
			results {
				name
				status
				gender
				species
				episode {
					name
				}
			}
		}
	}
`;
