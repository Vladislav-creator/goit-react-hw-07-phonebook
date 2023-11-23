import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    tagTypes: ['Contacts'],
    baseQuery: fetchBaseQuery({baseUrl: 'https://655dcf339f1e1093c599ea1f.mockapi.io/'}),
    endpoints: (build) => ({
        getContacts: build.query({
            query: () => 'contacts',
            providesTags:  [{ type: 'Contacts', id: 'LIST' }],
        }),
        addContact: build.mutation({
            query: (body) => ({
                url: 'contacts',
                method: 'POST',
                body,
            }),
            invalidatesTags: [{type: 'Contacts', id: 'LIST'}]
        }),
        deleteContact: build.mutation({
            query: (id) => ({
                url: `contacts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [{type: 'Contacts', id: 'LIST'}]
        })
    })
});

export const {useGetContactsQuery, useAddContactMutation, useDeleteContactMutation} = contactsApi;