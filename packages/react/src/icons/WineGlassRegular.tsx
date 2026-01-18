import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type WineGlassRegularProps = Omit<IconBaseProps, 'children'>;

const WineGlassRegular = memo(
  forwardRef<SVGSVGElement, WineGlassRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M17.52 1.25q.08 0 .14.02l.05.01.08.03.03.01a1 1 0 0 1 .33.32l.04.07.05.15v.04l.08.46.18 1.31c.12 1.1.25 2.64.25 4.33a6.75 6.75 0 0 1-6 6.7V19c0 1.24 1 2.25 2.25 2.25h1.08a.75.75 0 0 1-.08 1.5H8a.75.75 0 0 1 0-1.5h1c1.24 0 2.25-1 2.25-2.25v-4.3a6.75 6.75 0 0 1-6-6.7 38 38 0 0 1 .5-6.1l.01-.03.05-.16.04-.07.12-.17q.1-.09.2-.15h.03l.09-.04.05-.01.14-.02zM7.14 2.75q-.07.42-.14 1.1A37 37 0 0 0 6.75 8a5.25 5.25 0 1 0 10.5 0 37 37 0 0 0-.39-5.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

WineGlassRegular.displayName = 'WineGlassRegular';

// Triple export pattern (lucide-react style)
export { WineGlassRegular, WineGlassRegular as WineGlassRegularIcon, WineGlassRegular as SiWineGlassRegular };
export type { WineGlassRegularProps };
