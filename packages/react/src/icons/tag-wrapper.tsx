import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TagIcon as RegularTagIcon } from './tag';
import { TagIconDuotone as TagIconDuotone } from './tag-duotone';
import { TagIconBold as TagIconBold } from './tag-bold';
import { TagIconBoldDuotone as TagIconBoldDuotone } from './tag-bold-duotone';
import { TagIconFill as TagIconFill } from './tag-fill';
import { TagIconFillDuotone as TagIconFillDuotone } from './tag-fill-duotone';

export interface TagIconProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

const TagIcon = memo(forwardRef<SVGSVGElement, TagIconProps>(({ 
  weight = 'regular',
  duotone = false,
  ...props 
}, ref) => {
  if (weight === 'bold' && duotone) return <TagIconBoldDuotone ref={ref} {...props} />;
  if (weight === 'bold') return <TagIconBold ref={ref} {...props} />;
  if (weight === 'fill' && duotone) return <TagIconFillDuotone ref={ref} {...props} />;
  if (weight === 'fill') return <TagIconFill ref={ref} {...props} />;
  if (duotone) return <TagIconDuotone ref={ref} {...props} />;
  return <RegularTagIcon ref={ref} {...props} />;
}));

TagIcon.displayName = 'TagIcon';

export { TagIcon };
