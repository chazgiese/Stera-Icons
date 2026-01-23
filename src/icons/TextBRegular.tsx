import { memo, forwardRef } from 'react';
import { IconBase } from '../base.js';
import type { IconBaseProps } from '../base.js';

type TextBRegularProps = Omit<IconBaseProps, 'children'>;

const TextBRegular = memo(
  forwardRef<SVGSVGElement, TextBRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="text-b" {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.5 2.25a5.25 5.25 0 0 1 3.45 9.2 5.25 5.25 0 0 1-1.45 10.3H9.2q-.82 0-1.37-.03a3 3 0 0 1-1.08-.27 2.8 2.8 0 0 1-1.2-1.2 3 3 0 0 1-.27-1.08q-.04-.55-.03-1.37V6.14q0-.78.03-1.3.03-.54.24-1.03c.27-.56.73-1.02 1.29-1.29q.48-.21 1.02-.24.54-.04 1.31-.03zm-3.3 10.5c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v2.6q0 .84.02 1.25c.03.29.07.43.12.52q.18.35.54.54c.1.05.23.1.52.12s.68.02 1.25.02h5.3a3.75 3.75 0 1 0 0-7.5zm-.06-9c-.54 0-.9 0-1.19.02-.27.02-.4.06-.5.1q-.38.2-.58.59-.06.1-.1.49c-.02.28-.02.65-.02 1.2v2.7c0 .55 0 .92.02 1.2s.06.4.1.5q.2.38.59.58.1.06.49.1c.28.02.65.02 1.2.02h3.35a3.75 3.75 0 1 0 0-7.5z" clipRule="evenodd" />
    </IconBase>
  ))
);

TextBRegular.displayName = 'TextBRegular';

// Triple export pattern (lucide-react style)
export { TextBRegular, TextBRegular as TextBRegularIcon, TextBRegular as SiTextBRegular };
export default TextBRegular;
export type { TextBRegularProps };
