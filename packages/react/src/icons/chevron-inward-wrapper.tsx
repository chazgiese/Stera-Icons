import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { ChevronInwardIcon as RegularChevronInwardIcon } from './chevron-inward';
import { ChevronInwardIconDuotone as ChevronInwardIconDuotone } from './chevron-inward-duotone';
import { ChevronInwardIconBold as ChevronInwardIconBold } from './chevron-inward-bold';
import { ChevronInwardIconBoldDuotone as ChevronInwardIconBoldDuotone } from './chevron-inward-bold-duotone';
import { ChevronInwardIconFill as ChevronInwardIconFill } from './chevron-inward-fill';
import { ChevronInwardIconFillDuotone as ChevronInwardIconFillDuotone } from './chevron-inward-fill-duotone';

export interface ChevronInwardIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const ChevronInwardIcon = memo(forwardRef<SVGSVGElement, ChevronInwardIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <ChevronInwardIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <ChevronInwardIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <ChevronInwardIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <ChevronInwardIconFill ref={ref} {...props} />;
  if (duotone) return <ChevronInwardIconDuotone ref={ref} {...props} />;
  return <RegularChevronInwardIcon ref={ref} {...props} />;
}));

ChevronInwardIcon.displayName = 'ChevronInwardIcon';

export { ChevronInwardIcon };
