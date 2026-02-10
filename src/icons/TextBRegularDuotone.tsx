import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextBRegularDuotoneProps = Omit<IconBaseProps, 'children'>;

const TextBRegularDuotone = memo(
  forwardRef<SVGSVGElement, TextBRegularDuotoneProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-b-duotone" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12 3.25a4.75 4.75 0 0 1 3.29 8.18A4.75 4.75 0 0 1 14 20.75H8.84q-.72 0-1.22-.03a3 3 0 0 1-.99-.25 2.5 2.5 0 0 1-1.1-1.1 3 3 0 0 1-.25-.99q-.04-.5-.03-1.22V6.84q0-.72.03-1.22.02-.52.25-.99.37-.73 1.1-1.1.46-.23.99-.25.5-.04 1.22-.03zm-3.16 9.5q-.73 0-1.1.02c-.25.02-.36.06-.43.1q-.3.15-.45.44c-.03.07-.07.18-.09.43-.02.26-.02.6-.02 1.1v2.32c0 .5 0 .84.02 1.1.02.25.06.36.1.43q.15.3.44.45c.07.03.18.07.43.09q.37.02 1.1.02H14a3.25 3.25 0 0 0 0-6.5zm0-8q-.73 0-1.1.02c-.25.02-.36.06-.43.1q-.3.15-.45.44c-.03.07-.07.18-.09.43q-.02.37-.02 1.1v2.32c0 .5 0 .84.02 1.1.02.25.06.36.1.43q.15.3.44.45c.07.03.18.07.43.09q.37.02 1.1.02H12a3.25 3.25 0 0 0 0-6.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

TextBRegularDuotone.displayName = 'TextBRegularDuotone';

// Triple export pattern (lucide-react style)
export { TextBRegularDuotone, TextBRegularDuotone as TextBRegularDuotoneIcon, TextBRegularDuotone as SiTextBRegularDuotone };
export default TextBRegularDuotone;
export type { TextBRegularDuotoneProps };
