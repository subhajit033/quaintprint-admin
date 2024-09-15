import { useQuery, useMutation } from '@tanstack/react-query';
import api from '.';

const useAdminLogin = () => {
  return useMutation({
    mutationKey: ['adminLogin'],
    mutationFn: async (body) => {
      return api.post('/admin/login', body);
    },
  });
};

const useGetUnapprovedPdt = () => {
  return api.get('/admin/unapproved-pdt');
};

const useGetQueries = () => {
  return useQuery({
    queryKey: ['queries'],
    queryFn: async () => {
      return api.get('/admin/enquiry');
    },
  });
};

export const adminSevice = {
  useAdminLogin,
  useGetUnapprovedPdt,
  useGetQueries,
};
