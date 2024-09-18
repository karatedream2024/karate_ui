import { api } from "../api";

const userApi = api.injectEndpoints({
  reducerPath: "userApi",
  endpoints: (builder) => ({

    getAllBlog: builder.query({
      query: () => ({
        url: '/blog/getblog',
        method: "GET",
      }),
      providesTags: ['blog'],
    }),

    getAllEvent: builder.query({
      query: () => ({
        url: '/event/getevent',
        method: "GET",
      }),
      providesTags: ['Event'],
    }),

    getAllDojo: builder.query({
      query: () => ({
        url: '/dojo/getdojo',
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
} = userApi;
