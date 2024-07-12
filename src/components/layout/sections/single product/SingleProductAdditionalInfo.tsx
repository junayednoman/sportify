import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const SingleProductAdditionalInfo = ({
  description,
}: {
  description: string;
}) => {
  return (
    <div className="p-6 border rounded-md">
      <div>
        <Tabs defaultValue="Description">
          <TabsList className="w-full justify-start">
            <TabsTrigger value="Description">Description</TabsTrigger>
            <TabsTrigger value="Reviews">Reviews</TabsTrigger>
            <TabsTrigger value="Additional Information">
              Additional Information
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Description">{description}</TabsContent>
          <TabsContent value="Reviews">All reviews</TabsContent>
          <TabsContent value="Additional Information">
            Additional Information
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default SingleProductAdditionalInfo;
