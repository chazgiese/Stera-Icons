import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type KeyboardRegularProps = Omit<IconBaseProps, 'children'>;

const KeyboardRegular = memo(
  forwardRef<SVGSVGElement, KeyboardRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="keyboard" {...props}>
      <path fill="currentColor" d="M6.5 13.25a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5zM14.25 13.25a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1 0-1.5zM18 13.25a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5zM6.5 9.25a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1 0-1.5zM10.25 9.25a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5zM14.25 9.25a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5zM18 9.25a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1 0-1.5z" />
        <path fill="currentColor" fillRule="evenodd" d="M20 5.25A2.75 2.75 0 0 1 22.75 8v8A2.75 2.75 0 0 1 20 18.75H4A2.75 2.75 0 0 1 1.25 16V8A2.75 2.75 0 0 1 4 5.25zM4 6.75c-.69 0-1.25.56-1.25 1.25v8c0 .69.56 1.25 1.25 1.25h16c.69 0 1.25-.56 1.25-1.25V8c0-.69-.56-1.25-1.25-1.25z" clipRule="evenodd" />
    </IconBase>
  ))
);

KeyboardRegular.displayName = 'KeyboardRegular';

// Triple export pattern (lucide-react style)
export { KeyboardRegular, KeyboardRegular as KeyboardRegularIcon, KeyboardRegular as SiKeyboardRegular };
export default KeyboardRegular;
export type { KeyboardRegularProps };
