import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type ToyBrickBoldProps = Omit<IconBaseProps, 'children'>;

const ToyBrickBold = memo(
  forwardRef<SVGSVGElement, ToyBrickBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M9.25 4.5c1.24 0 2.25 1 2.25 2.25V8h1V6.75c0-1.24 1-2.25 2.25-2.25h2.5c1.24 0 2.25 1 2.25 2.25V8.4A3 3 0 0 1 21 11v6a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-6a3 3 0 0 1 1.5-2.6V6.75c0-1.24 1-2.25 2.25-2.25zM6 10a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1zm.75-3.5a.25.25 0 0 0-.25.25V8h3V6.75a.25.25 0 0 0-.25-.25zm8 0a.25.25 0 0 0-.25.25V8h3V6.75a.25.25 0 0 0-.25-.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

ToyBrickBold.displayName = 'ToyBrickBold';

// Triple export pattern (lucide-react style)
export { ToyBrickBold, ToyBrickBold as ToyBrickBoldIcon, ToyBrickBold as SiToyBrickBold };
export type { ToyBrickBoldProps };
