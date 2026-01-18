import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HomeXRegularProps = Omit<IconBaseProps, 'children'>;

const HomeXRegular = memo(
  forwardRef<SVGSVGElement, HomeXRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" d="M13.97 10.47a.75.75 0 1 1 1.06 1.06l-1.97 1.97 1.97 1.97a.75.75 0 0 1-1.06 1.06L12 14.56l-1.97 1.97a.75.75 0 0 1-1.06-1.06l1.97-1.97-1.97-1.97a.75.75 0 1 1 1.06-1.06L12 12.44z" />
        <path fill="currentColor" fillRule="evenodd" d="M9.7 2.84a3.75 3.75 0 0 1 4.6 0l6 4.67c.92.7 1.45 1.8 1.45 2.96V18A3.75 3.75 0 0 1 18 21.75H6A3.75 3.75 0 0 1 2.25 18v-7.53c0-1.16.53-2.25 1.45-2.96zm3.68 1.18a2.25 2.25 0 0 0-2.76 0l-6 4.67a2.3 2.3 0 0 0-.87 1.78V18c0 1.24 1 2.25 2.25 2.25h12c1.24 0 2.25-1 2.25-2.25v-7.53c0-.7-.32-1.35-.87-1.78z" clipRule="evenodd" />
    </IconBase>
  ))
);

HomeXRegular.displayName = 'HomeXRegular';

// Triple export pattern (lucide-react style)
export { HomeXRegular, HomeXRegular as HomeXRegularIcon, HomeXRegular as SiHomeXRegular };
export type { HomeXRegularProps };
