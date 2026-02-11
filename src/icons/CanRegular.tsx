import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type CanRegularProps = Omit<IconBaseProps, 'children'>;

const CanRegular = memo(
  forwardRef<SVGSVGElement, CanRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="can" {...props}>
      <path fillRule="evenodd" d="M17.5 2.25a.75.75 0 0 1 0 1.5h-.2l.56 1c.58 1.01.89 2.17.89 3.34v7.82c0 1.17-.3 2.33-.89 3.35l-.63 1.1a2.8 2.8 0 0 1-2.39 1.39H9.16c-.99 0-1.9-.53-2.39-1.39l-.63-1.1a7 7 0 0 1-.89-3.35V8.09c0-1.17.3-2.33.89-3.35l.57-.99H6.5a.75.75 0 0 1 0-1.5zm-9.06 1.5-1 1.74q-.68 1.22-.69 2.6v7.82q0 1.38.7 2.6l.63 1.11c.22.39.63.63 1.08.63h5.68c.45 0 .86-.24 1.08-.63l.64-1.1c.45-.8.69-1.7.69-2.61V8.09q0-1.38-.7-2.6l-.99-1.74z" clipRule="evenodd" />
    </IconBase>
  ))
);

CanRegular.displayName = 'CanRegular';

// Triple export pattern (lucide-react style)
export { CanRegular, CanRegular as CanRegularIcon, CanRegular as SiCanRegular };
export default CanRegular;
export type { CanRegularProps };
