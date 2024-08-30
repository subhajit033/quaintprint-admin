import api from '.';
import { useMutation, useQuery } from '@tanstack/react-query';

const useGetBanner = (enabled) => {
  return useQuery({
    queryKey: ['banner'],
    queryFn: async () => {
      return api.get('/admin/banner');
    },
    enabled,
  });
};
const useGetBestDeals = (enabled) => {
  return useQuery({
    queryKey: ['bestDeals'],
    queryFn: async () => {
      return api.get('/admin/best-deal');
    },
    enabled,
  });
};
const useGetBestSeller = (enabled) => {
  return useQuery({
    queryKey: ['bestSeller'],
    queryFn: async () => {
      return api.get('/admin/best-seller');
    },
    enabled,
  });
};
const useUploadBanner = () => {
  return useMutation({
    mutationKey: ['bannerup'],
    mutationFn: async (body) => {
      return api.post('/admin/banner', body);
    },
  });
};
const useUploadBestDeals = () => {
  return useMutation({
    mutationKey: ['bestDealsUp'],
    mutationFn: async (body) => {
      return api.post('/admin/best-deal', body);
    },
  });
};
const useUploadtSeller = () => {
  return useMutation({
    mutationKey: ['bestSellerup'],
    mutationFn: async (body) => {
      return api.post('/admin/best-seller', body);
    },
  });
};

const useUploadAsset = () => {
  return useMutation({
    mutationKey: ['uploadAsset'],
    mutationFn: async (body) => {
      return api.post('/uploads/upload-asset', body);
    },
  });
};

export const contentservice = {
  useUploadAsset,
  useGetBanner,
  useGetBestDeals,
  useGetBestSeller,
  useUploadBanner,
  useUploadBestDeals,
  useUploadtSeller,
};
