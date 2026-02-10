import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlyRegularProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyRegular = memo(
  forwardRef<SVGSVGElement, BracketsCurlyRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly" {...props}>
      <path fill="currentColor" d="M8 3.25a.75.75 0 0 1 0 1.5H6.78c-.57 0-1.03.46-1.03 1.03v2.2c0 1.63-.8 3.11-2.07 4.02 1.27.9 2.07 2.4 2.07 4.02v2.2c0 .57.46 1.03 1.03 1.03H8a.75.75 0 0 1 0 1.5H6.78a2.53 2.53 0 0 1-2.53-2.53v-2.2c0-1.53-1-2.87-2.46-3.3a.75.75 0 0 1 0-1.44 3.44 3.44 0 0 0 2.46-3.3v-2.2c0-1.4 1.13-2.53 2.53-2.53zM17.22 3.25c1.4 0 2.53 1.13 2.53 2.53v2.2c0 1.53 1 2.87 2.46 3.3a.75.75 0 0 1 0 1.44 3.44 3.44 0 0 0-2.46 3.3v2.2c0 1.4-1.13 2.53-2.53 2.53H16a.75.75 0 0 1 0-1.5h1.22c.57 0 1.03-.46 1.03-1.03v-2.2c0-1.63.8-3.11 2.07-4.02a5 5 0 0 1-2.07-4.02v-2.2c0-.57-.46-1.03-1.03-1.03H16a.75.75 0 0 1 0-1.5z" />
    </IconBase>
  ))
);

BracketsCurlyRegular.displayName = 'BracketsCurlyRegular';

// Triple export pattern (lucide-react style)
export { BracketsCurlyRegular, BracketsCurlyRegular as BracketsCurlyRegularIcon, BracketsCurlyRegular as SiBracketsCurlyRegular };
export default BracketsCurlyRegular;
export type { BracketsCurlyRegularProps };
