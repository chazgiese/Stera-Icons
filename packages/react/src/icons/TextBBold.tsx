import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TextBBoldProps = Omit<IconBaseProps, 'children'>;

const TextBBold = memo(
  forwardRef<SVGSVGElement, TextBBoldProps>((props, ref) => (
    <IconBase ref={ref} {...props}>
      <path fill="currentColor" fillRule="evenodd" d="M12.5 2a5.5 5.5 0 0 1 3.93 9.35A5.5 5.5 0 0 1 14.5 22H9.2q-.81 0-1.4-.03c-.4-.03-.78-.1-1.16-.3a3 3 0 0 1-1.31-1.3c-.2-.39-.27-.78-.3-1.17q-.04-.59-.03-1.4V6.14q0-.77.03-1.33T5.3 3.7a3 3 0 0 1 1.4-1.4c.36-.18.74-.24 1.11-.27q.56-.04 1.33-.03zM9.2 13c-.58 0-.95 0-1.23.02-.27.03-.37.06-.42.09a1 1 0 0 0-.44.44c-.03.05-.06.15-.09.42-.02.28-.02.65-.02 1.23v2.6c0 .58 0 .95.02 1.23.03.27.06.37.09.42a1 1 0 0 0 .44.44c.05.03.15.06.42.09.28.02.65.02 1.23.02h5.3a3.5 3.5 0 1 0 0-7zm-.06-9c-.55 0-.9 0-1.17.02s-.36.06-.4.08a1 1 0 0 0-.47.47c-.02.04-.06.14-.08.4C7 5.24 7 5.59 7 6.14v2.72c0 .55 0 .9.02 1.17s.06.36.08.4q.15.31.47.47c.04.02.14.06.4.08.27.02.62.02 1.17.02h3.36a3.5 3.5 0 1 0 0-7z" clipRule="evenodd" />
    </IconBase>
  ))
);

TextBBold.displayName = 'TextBBold';

// Triple export pattern (lucide-react style)
export { TextBBold, TextBBold as TextBBoldIcon, TextBBold as SiTextBBold };
export type { TextBBoldProps };
