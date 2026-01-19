import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type HomeRegularProps = Omit<IconBaseProps, 'children'>;

const HomeRegular = memo(
  forwardRef<SVGSVGElement, HomeRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="home" {...props}>
      <path fill="currentColor" d="M13 11.75c.69 0 1.25.56 1.25 1.25v4c0 .69-.56 1.25-1.25 1.25h-2c-.65 0-1.18-.5-1.24-1.12L9.75 17v-4c0-.69.56-1.25 1.25-1.25z" />
        <path fill="currentColor" fillRule="evenodd" d="M9.7 2.84a3.75 3.75 0 0 1 4.6 0l6 4.67c.92.7 1.45 1.8 1.45 2.96V18A3.75 3.75 0 0 1 18 21.75H6A3.75 3.75 0 0 1 2.25 18v-7.53c0-1.16.53-2.25 1.45-2.96zm3.68 1.18a2.25 2.25 0 0 0-2.76 0l-6 4.67a2.3 2.3 0 0 0-.87 1.78V18c0 1.24 1 2.25 2.25 2.25h12c1.24 0 2.25-1 2.25-2.25v-7.53c0-.7-.32-1.35-.87-1.78z" clipRule="evenodd" />
    </IconBase>
  ))
);

HomeRegular.displayName = 'HomeRegular';

// Triple export pattern (lucide-react style)
export { HomeRegular, HomeRegular as HomeRegularIcon, HomeRegular as SiHomeRegular };
export type { HomeRegularProps };
