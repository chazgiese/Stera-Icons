import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextSearchRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextSearchRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextSearchRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-search-duotone" {...props}>
      <path d="M8 17.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM8 11.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5zM21 5.25a.75.75 0 0 1 0 1.5H3a.75.75 0 0 1 0-1.5z" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M15.5 9.25a4.25 4.25 0 0 1 3.63 6.46l2.08 2.08a1 1 0 1 1-1.42 1.42l-2.08-2.08q-.98.61-2.21.62a4.25 4.25 0 0 1 0-8.5m0 1.5a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5" clipRule="evenodd" />
    </IconBase>
  ))
);

TextSearchRegularDuotone.displayName = 'TextSearchRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextSearchRegularDuotone, TextSearchRegularDuotone as TextSearchRegularDuotoneIcon, TextSearchRegularDuotone as SiTextSearchRegularDuotone };
export type { TextSearchRegularDuotoneProps };
