import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToolsBoldProps = Omit<IconBaseProps, 'children'>;

const ToolsBold = memo(
  forwardRef<SVGSVGElement, ToolsBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="tools-bold" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M5.84 2.18a5.17 5.17 0 0 1 6.46 5.75l1.18 1.18 4-4-.14-.14a1 1 0 0 1 .2-1.56l2.1-1.27.15-.07a1 1 0 0 1 1.07.22l.85.85a1 1 0 0 1 .15 1.22l-1.27 2.1a1 1 0 0 1-1.56.2l-.14-.14-4 4 1.18 1.18a5.17 5.17 0 0 1 5.75 6.46 1 1 0 0 1-1.67.45L19 17.46h-1.53v1.53l1.15 1.16a1 1 0 0 1-.45 1.67 5.17 5.17 0 0 1-6.5-4.69l-3.88 3.88A3.39 3.39 0 0 1 3 16.2l3.88-3.87a5.16 5.16 0 0 1-4.7-6.5l.05-.13a1 1 0 0 1 1.63-.32L5 6.55h1.54V5L5.39 3.85a1 1 0 0 1 .45-1.67M4.4 17.63a1.39 1.39 0 0 0 1.96 1.96l4.43-4.43-1.96-1.96zM8.5 4.3q.05.15.05.3v2.96a1 1 0 0 1-1 1H4.59a1 1 0 0 1-.3-.05 3.2 3.2 0 0 0 3.7 1.74l.14-.02a1 1 0 0 1 .83.28l4.54 4.54a1 1 0 0 1 .26.96 3.2 3.2 0 0 0 1.74 3.71 1 1 0 0 1-.04-.3v-2.95a1 1 0 0 1 1-1h3.05l.2.04a3.2 3.2 0 0 0-3.7-1.74 1 1 0 0 1-.97-.26L10.5 8.96a1 1 0 0 1-.26-.96A3.2 3.2 0 0 0 8.5 4.29" clipRule="evenodd" />
    </IconBase>
  ))
);

ToolsBold.displayName = 'ToolsBold';

// Triple export pattern (lucide-react style)
export { ToolsBold, ToolsBold as ToolsBoldIcon, ToolsBold as SiToolsBold };
export type { ToolsBoldProps };
