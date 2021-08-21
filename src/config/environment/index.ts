import devConfig from './index.dev';
import productionConfig from './index.production';

export default __DEV__ ? devConfig : productionConfig;
