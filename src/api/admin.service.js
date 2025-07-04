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
const useGetApprovedPdt = (enabled) => {
  return useQuery({
    queryKey: ['approve-pdt'],
    queryFn: async () => {
      return api.get('/admin/approved-pdt');
    },
    enabled,
  });
};

const useGetQueries = (enabled) => {
  return useQuery({
    queryKey: ['queries'],
    queryFn: async () => {
      return api.get('/admin/enquiry');
    },
    enabled,
  });
};

const useDeletePdt = () => {
  return useMutation({
    mutationKey: ['deleKey'],
    mutationFn: (id) => {
      return api.delete('/admin/delete-product/' + id);
    },
  });
};

const useGetAllOrders = (enabled) => {
  return useQuery({
    queryKey: ['all-order'],
    queryFn: async () => {
      return api.get('/admin/get-all-order');
    },
    enabled,
  });
};

const useApproveOrder = () => {
  return useMutation({
    mutationKey: ['approveOrder'],
    mutationFn: async ({ orderId, body }) => {
      return api.patch('/admin/approve-order/' + orderId, body);
    },
  });
};

export const adminSevice = {
  useAdminLogin,
  useGetUnapprovedPdt,
  useGetQueries,
  useGetApprovedPdt,
  useDeletePdt,
  useGetAllOrders,
  useApproveOrder,
};
