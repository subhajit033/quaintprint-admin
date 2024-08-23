import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BestDeals from '@/modules/dashboard/BestDeals';
import BestSelling from '@/modules/dashboard/BestSelling';
import HomeBanner from '@/modules/dashboard/HomeBanner';

const Setting = () => {
  return (
    <Tabs defaultValue='banner' className='w-full'>
      <TabsList>
        <TabsTrigger value='banner'>Home Banner</TabsTrigger>
        <TabsTrigger value='bestdeals'>Best Deals</TabsTrigger>
        <TabsTrigger value='bestselling'>Best Selling</TabsTrigger>
      </TabsList>
      <TabsContent value='banner'>
        <HomeBanner />
      </TabsContent>
      <TabsContent className="w-full" value='bestdeals'>
        <BestDeals />
      </TabsContent>
      <TabsContent value='bestselling'>
        <BestSelling />
      </TabsContent>
    </Tabs>
  );
};

export default Setting;
