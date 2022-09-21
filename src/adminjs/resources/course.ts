import uploadFileFeature from "@adminjs/upload";
import { FeatureType, ResourceOptions } from "adminjs";
import path from "path";

export const courseResourceOptions: ResourceOptions = {
  navigation: 'Catálogo',
  editProperties: ['name', 'synopsis', 'uploadThumbail', 'featured', 'categoryId' ],
  filterProperties: ['name', 'synopsis', 'featured', 'categoryId', 'createdAt', 'updatedAt'],
  listProperties: [ 'name', 'featured', 'categoryId'],
  showProperties: ['id','name', 'synopsis', 'thumbnailUrl', 'featured', 'categoryId', 'createdAt', 'updatedAt' ]
}

export const courseResourceFeatures: FeatureType[] = [
  uploadFileFeature({
    provider:{
      local: {
        bucket: path.join(__dirname, '..', '..','..', 'public')
      }
    },
    properties: {
      key: 'thumbnailUrl',
      file: 'uploadThumbail'
    },
    uploadPath: (record, filename) => `thumbnails/course-${record.get('id')}/${filename}`
  })
]