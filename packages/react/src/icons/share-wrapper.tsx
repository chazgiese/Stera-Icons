import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ShareIcon as RegularShareIcon } from './share';
import { ShareIconDuotone as ShareIconDuotone } from './share-duotone';
import { ShareIconBold as ShareIconBold } from './share-bold';
import { ShareIconBoldDuotone as ShareIconBoldDuotone } from './share-bold-duotone';
import { ShareIconFill as ShareIconFill } from './share-fill';
import { ShareIconFillDuotone as ShareIconFillDuotone } from './share-fill-duotone';

export interface ShareIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ShareIcon = memo(forwardRef<SVGSVGElement, ShareIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ShareIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ShareIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ShareIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ShareIconFill ref={ref} {...props} />;
  if (duotone) return <ShareIconDuotone ref={ref} {...props} />;
  return <RegularShareIcon ref={ref} {...props} />;
}));

ShareIcon.displayName = 'ShareIcon';

export { ShareIcon };
