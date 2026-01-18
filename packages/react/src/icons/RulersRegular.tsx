import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type RulersRegularProps = Omit<IconBaseProps, 'children'>;

const RulersRegular = memo(
  forwardRef<SVGSVGElement, RulersRegularProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M19.75 2.25a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2h-10v10a2 2 0 0 1-2 2h-3.5a2 2 0 0 1-2-2V4.25c0-1.1.9-2 2-2zm-16 17.5c0 .28.22.5.5.5h3.5a.5.5 0 0 0 .5-.5v-2H7a.75.75 0 0 1 0-1.5h1.25v-2.5H7a.75.75 0 0 1 0-1.5h1.25v-2.5h-4.5zm.4-15.99a.5.5 0 0 0-.4.49v4h4.5v-4.5h-4zm5.6 4.49h2.5V7a.75.75 0 0 1 1.5 0v1.25h2.5V7a.75.75 0 0 1 1.5 0v1.25h2a.5.5 0 0 0 .5-.5v-3.5a.5.5 0 0 0-.5-.5h-10z" clipRule="evenodd" />
    </IconBase>
  ))
);

RulersRegular.displayName = 'RulersRegular';

// Triple export pattern (lucide-react style)
export { RulersRegular, RulersRegular as RulersRegularIcon, RulersRegular as SiRulersRegular };
export type { RulersRegularProps };
