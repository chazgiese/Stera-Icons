import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorClickRegularProps = Omit<IconBaseProps, 'children'>;

const CursorClickRegular = memo(
  forwardRef<SVGSVGElement, CursorClickRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor-click" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M8.33 10.24c-.4-1.18.73-2.3 1.91-1.91l10.48 3.49a1.51 1.51 0 0 1-.06 2.88l-4.6 1.36-1.36 4.6a1.51 1.51 0 0 1-2.88.06zm1.42-.49v.01l3.5 10.48v.01h.01l1.48-5 .03-.1q.14-.31.47-.41l5-1.47.01-.02-10.48-3.5z" clipRule="evenodd" />
        <path fill="currentColor" d="M4.47 12.47a.75.75 0 0 1 1.06 1.06l-1.41 1.42a.75.75 0 0 1-1.06-1.07zM1.51 7c.11-.4.52-.64.92-.53l1.93.51a.75.75 0 1 1-.38 1.45l-1.94-.52A.75.75 0 0 1 1.51 7M13.88 3.06a.75.75 0 0 1 1.07 1.06l-1.42 1.41a.75.75 0 0 1-1.06-1.06zM7 1.51c.4-.1.8.13.91.53l.52 1.94a.75.75 0 1 1-1.45.38l-.52-1.93c-.1-.4.13-.8.53-.92" />
    </IconBase>
  ))
);

CursorClickRegular.displayName = 'CursorClickRegular';

// Triple export pattern (lucide-react style)
export { CursorClickRegular, CursorClickRegular as CursorClickRegularIcon, CursorClickRegular as SiCursorClickRegular };
export type { CursorClickRegularProps };
