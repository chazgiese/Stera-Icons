import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { HomeRegular } from './HomeRegular.js';
import { HomeRegularDuotone } from './HomeRegularDuotone.js';
import { HomeBold } from './HomeBold.js';
import { HomeBoldDuotone } from './HomeBoldDuotone.js';
import { HomeFill } from './HomeFill.js';
import { HomeFillDuotone } from './HomeFillDuotone.js';

export interface HomeProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Home - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { HomeRegular } from 'stera-icons/icons/HomeRegular';
 */
const Home = memo(forwardRef<SVGSVGElement, HomeProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <HomeBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <HomeBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <HomeFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <HomeFill ref={ref} {...rest} />;
  if (duotone) return <HomeRegularDuotone ref={ref} {...rest} />;
  return <HomeRegular ref={ref} {...rest} />;
}));

Home.displayName = 'Home';

// Triple export pattern (lucide-react style)
export { Home, Home as HomeIcon, Home as SiHome };
export default Home;
