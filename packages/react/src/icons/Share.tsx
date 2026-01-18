import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShareRegular } from './ShareRegular';
import { ShareRegularDuotone } from './ShareRegularDuotone';
import { ShareBold } from './ShareBold';
import { ShareBoldDuotone } from './ShareBoldDuotone';
import { ShareFill } from './ShareFill';
import { ShareFillDuotone } from './ShareFillDuotone';

export interface ShareProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Share with dynamic weight and duotone props.
 * For smaller bundle size, import specific variants directly:
 * import { ShareRegular } from 'stera-icons/ShareRegular';
 */
const Share = memo(forwardRef<SVGSVGElement, ShareProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShareBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <ShareBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <ShareFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <ShareFill ref={ref} {...rest} />;
  if (duotone) return <ShareRegularDuotone ref={ref} {...rest} />;
  return <ShareRegular ref={ref} {...rest} />;
}));

Share.displayName = 'Share';

export { Share };
