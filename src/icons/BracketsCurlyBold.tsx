import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type BracketsCurlyBoldProps = Omit<IconBaseProps, 'children'>;

const BracketsCurlyBold = memo(
  forwardRef<SVGSVGElement, BracketsCurlyBoldProps>((props, ref) => (
    <IconBase ref={ref} iconName="brackets-curly-bold" {...props}>
      <path d="M8 3a1 1 0 0 1 0 2H6.78a.8.8 0 0 0-.78.78v2.2c0 1.6-.73 3.05-1.9 4.02A5.2 5.2 0 0 1 6 16.02v2.2c0 .43.35.78.78.78H8a1 1 0 1 1 0 2H6.78A2.8 2.8 0 0 1 4 18.22v-2.2c0-1.42-.93-2.66-2.28-3.06a1 1 0 0 1 0-1.92A3.2 3.2 0 0 0 4 7.98v-2.2A2.8 2.8 0 0 1 6.78 3zM17.22 3A2.8 2.8 0 0 1 20 5.78v2.2c0 1.42.93 2.66 2.28 3.06a1 1 0 0 1 0 1.92A3.2 3.2 0 0 0 20 16.02v2.2A2.8 2.8 0 0 1 17.22 21H16a1 1 0 1 1 0-2h1.22c.43 0 .78-.35.78-.78v-2.2c0-1.6.73-3.06 1.9-4.02A5.2 5.2 0 0 1 18 7.98v-2.2a.8.8 0 0 0-.78-.78H16a1 1 0 1 1 0-2z" />
    </IconBase>
  ))
);

BracketsCurlyBold.displayName = 'BracketsCurlyBold';

// Triple export pattern (lucide-react style)
export { BracketsCurlyBold, BracketsCurlyBold as BracketsCurlyBoldIcon, BracketsCurlyBold as SiBracketsCurlyBold };
export default BracketsCurlyBold;
export type { BracketsCurlyBoldProps };
