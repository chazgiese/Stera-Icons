import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type CursorRegularProps = Omit<IconBaseProps, 'children'>;

const CursorRegular = memo(
  forwardRef<SVGSVGElement, CursorRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="cursor" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M3.35 5a1.9 1.9 0 0 1 2.4-2.4l15.7 5.24a1.9 1.9 0 0 1-.06 3.61l-7.1 2.09-2.1 7.1a1.9 1.9 0 0 1-3.6.07zm1.92-.98a.4.4 0 0 0-.5.5l5.24 15.71a.4.4 0 0 0 .75-.01l2.2-7.5a.8.8 0 0 1 .51-.5l7.5-2.2a.4.4 0 0 0 .01-.76z" clipRule="evenodd" />
    </IconBase>
  ))
);

CursorRegular.displayName = 'CursorRegular';

// Triple export pattern (lucide-react style)
export { CursorRegular, CursorRegular as CursorRegularIcon, CursorRegular as SiCursorRegular };
export type { CursorRegularProps };
