import { api } from "../api";

const userApi = api.injectEndpoints({
  reducerPath: "userApi",
  endpoints: (builder) => ({

    getAllBlog: builder.query({
      query: ({ page, limit}) => ({
        url: `/blog/getblog/${limit}/${page}`,
        method: "GET",
      }),
      providesTags: ['blog'],
    }),

    getAllEvent: builder.query({
      query: ({ page, limit, eventtype }) => ({
        url: `/event/getevent/${limit}/${page}/${eventtype}`,
        method: "GET",
        // params: { page, limit, eventtype },
      }),
      providesTags: ['Event'],
    }),

    getAllDojo: builder.query({
      query: ({ page, limit}) => ({
        url: `/dojo/getdojo/${limit}/${page}`,
        method: "GET",
      }),
      providesTags: ['Dojo'],
    }),

    addRegistration: builder.mutation({
      query: (registrationData) => ({
        url: '/register/addregister',
        method: "POST",
        body: registrationData,
      }),
      invalidatesTags: ['Registration'],
    }),

    addContact: builder.mutation({
      query: (contactData) => ({
        url: '/contact/addcontact',
        method: "POST",
        body: contactData,
      }),
      invalidatesTags: ['Registration'],
    }),

    getAllTournaments: builder.query({
      query: () => ({
        url: '/tour/tournament',
        method: "GET",
      }),
      providesTags: ['tournament'],
    }),

  }),
});

export const {
  useGetAllBlogQuery,
  useGetAllEventQuery,
  useGetAllDojoQuery,
  useAddRegistrationMutation,
  useGetAllTournamentsQuery,
  useAddContactMutation
} = userApi;
