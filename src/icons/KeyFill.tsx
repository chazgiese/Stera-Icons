import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type KeyFillProps = Omit<IconBaseProps, 'children'>;

const KeyFill = memo(
  forwardRef<SVGSVGElement, KeyFillProps>((props, ref) => (
    <IconBase ref={ref} iconName="key-fill" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M11.9 1.4a5.5 5.5 0 0 1 2.5 10.4v2.39l1.76 1.76-.46.35-1.54 1.15 1.44 1.45-3.7 3.7-2.5-2.5v-8.3a5.5 5.5 0 0 1 2.5-10.4m0 2.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyFill.displayName = 'KeyFill';

// Triple export pattern (lucide-react style)
export { KeyFill, KeyFill as KeyFillIcon, KeyFill as SiKeyFill };
export default KeyFill;
export type { KeyFillProps };
