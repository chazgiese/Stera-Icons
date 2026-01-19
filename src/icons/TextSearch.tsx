import { forwardRef, memo } from 'react';
import type { IconProps } from '../types';
import { TextSearchRegular } from './TextSearchRegular';
import { TextSearchRegularDuotone } from './TextSearchRegularDuotone';
import { TextSearchBold } from './TextSearchBold';
import { TextSearchBoldDuotone } from './TextSearchBoldDuotone';
import { TextSearchFill } from './TextSearchFill';
import { TextSearchFillDuotone } from './TextSearchFillDuotone';

export interface TextSearchProps extends IconProps {
  weight?: 'regular' | 'bold' | 'fill';
  duotone?: boolean;
}

/**
 * TextSearch - Dynamic wrapper component with convenience props.
 * Allows switching between weights and duotone variants at runtime.
 * For smaller bundle size, import specific variants directly:
 * import { TextSearchRegular } from 'stera-icons/icons/TextSearchRegular';
 */
const TextSearch = memo(forwardRef<SVGSVGElement, TextSearchProps>(({ 
  weight = 'regular',
  duotone = false,
  ...rest 
}, ref) => {
  if (weight === 'bold' && duotone) return <TextSearchBoldDuotone ref={ref} {...rest} />;
  if (weight === 'bold') return <TextSearchBold ref={ref} {...rest} />;
  if (weight === 'fill' && duotone) return <TextSearchFillDuotone ref={ref} {...rest} />;
  if (weight === 'fill') return <TextSearchFill ref={ref} {...rest} />;
  if (duotone) return <TextSearchRegularDuotone ref={ref} {...rest} />;
  return <TextSearchRegular ref={ref} {...rest} />;
}));

TextSearch.displayName = 'TextSearch';

// Triple export pattern (lucide-react style)
export { TextSearch, TextSearch as TextSearchIcon, TextSearch as SiTextSearch };
