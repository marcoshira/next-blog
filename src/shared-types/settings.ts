import { MenuPropsLinks } from '../components/Menu';
import { MetadataImage } from './postAttributes';

export type Settings = {
  data: {
    attributes: {
      blogName: string;
      blogDescription: string;
      logo: MetadataImage;
      menuLink: MenuPropsLinks[];
      html: string;
    };
  };
};
