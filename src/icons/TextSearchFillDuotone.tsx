import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextSearchFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextSearchFillDuotone = memo(
  forwardRef<SVGSVGElement, TextSearchFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-search-fill-duotone" {...props}>
      <path d="M8 16.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM8 10.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 0 1 0-3zM21 4.5a1.5 1.5 0 0 1 0 3H3a1.5 1.5 0 1 1 0-3z" opacity={0.4} />
        <path fillRule="evenodd" d="M15.5 8.5a5 5 0 0 1 4.55 7.07l1.69 1.7a1.75 1.75 0 1 1-2.48 2.47l-1.69-1.7a4.98 4.98 0 0 1-7.07-4.54 5 5 0 0 1 5-5m0 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4" clipRule="evenodd" />
    </IconBase>
  ))
);

TextSearchFillDuotone.displayName = 'TextSearchFillDuotone';

// Triple export pattern (lucide-react style)
export { TextSearchFillDuotone, TextSearchFillDuotone as TextSearchFillDuotoneIcon, TextSearchFillDuotone as SiTextSearchFillDuotone };
export default TextSearchFillDuotone;
export type { TextSearchFillDuotoneProps };
