import { forwardRef, memo } from 'react';
import type { IconProps } from '../types.js';
import { TagRegular } from './TagRegular.js';
import { TagRegularDuotone } from './TagRegularDuotone.js';
import { TagBold } from './TagBold.js';
import { TagBoldDuotone } from './TagBoldDuotone.js';
import { TagFill } from './TagFill.js';
import { TagFillDuotone } from './TagFillDuotone.js';

export interface TagProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * Tag - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TagRegular } from 'stera-icons/icons/TagRegular';
 */
const Tag = memo(forwardRef<SVGSVGElement, TagProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TagBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TagBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TagFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TagFill ref={ref} {...rest} />;
  if (duotone) return <TagRegularDuotone ref={ref} {...rest} />;
  return <TagRegular ref={ref} {...rest} />;
}));

Tag.displayName = 'Tag';

// Triple export pattern (lucide-react style)
export { Tag, Tag as TagIcon, Tag as SiTag };
export default Tag;
