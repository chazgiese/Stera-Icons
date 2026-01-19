import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ScrollFillDuotoneProps = Omit<IconBaseProps, 'children'>;

const ScrollFillDuotone = memo(
  forwardRef<SVGSVGElement, ScrollFillDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="scroll-fill-duotone" {...props}>
      <path d="M16.5 5a1 1 0 0 1 1 1v9h-6.25c-.97 0-1.75.78-1.75 1.75V18a1 1 0 0 1-.9 1h-.1a1 1 0 0 1-1-1V6a3 3 0 0 0-.17-1z" opacity={0.4} />
        <path d="M20.5 17v1a1 1 0 0 1-1 1h-8.17a3 3 0 0 0 .17-1v-1zM4.5 5a1 1 0 0 1 1 1v2.5h-2V6a1 1 0 0 1 1-1" opacity={0.4} />
        <path fill="currentColor" fillRule="evenodd" d="M20.75 15c.97 0 1.75.78 1.75 1.75V18a3 3 0 0 1-3 3h-11a3 3 0 0 1-3-3v-7.5H3.25c-.97 0-1.75-.78-1.75-1.75V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9zm-3.25 0V6a1 1 0 0 0-1-1H7.33a3 3 0 0 1 .17 1v12a1 1 0 0 0 1 1h.1a1 1 0 0 0 .9-1v-1.25c0-.97.78-1.75 1.75-1.75zm-6 3a3 3 0 0 1-.17 1h8.17a1 1 0 0 0 1-1v-1h-9zm-7-13a1 1 0 0 0-1 1v2.5h2V6a1 1 0 0 0-1-1" clipRule="evenodd" />
    </IconBase>
  ))
);

ScrollFillDuotone.displayName = 'ScrollFillDuotone';

// Triple export pattern (lucide-react style)
export { ScrollFillDuotone, ScrollFillDuotone as ScrollFillDuotoneIcon, ScrollFillDuotone as SiScrollFillDuotone };
export type { ScrollFillDuotoneProps };
