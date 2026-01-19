import { memo, forwardRef } from 'react';
import { IconBase } from '../IconBase';
import type { IconBaseProps } from '../IconBase';

type TagRegularProps = Omit<IconBaseProps, 'children'>;

const TagRegular = memo(
  forwardRef<SVGSVGElement, TagRegularProps>((props, ref) => (
    <IconBase ref={ref} iconName="tag" {...props}>
      <path fill="currentColor" d="M7.75 6a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5" />
        <path fill="currentColor" fillRule="evenodd" d="M11.67 2.25c.46 0 .8 0 1.14.08q.42.09.8.33c.3.18.54.43.86.75l6.3 6.3q.57.56.95.99.38.44.57.95c.18.55.18 1.15 0 1.7q-.19.53-.57.95t-.95 1l-5.48 5.47q-.56.57-.99.95c-.3.25-.59.45-.95.57-.55.18-1.15.18-1.7 0a3 3 0 0 1-.95-.57q-.41-.37-1-.95l-6.3-6.3c-.31-.32-.56-.57-.74-.86a3 3 0 0 1-.33-.8c-.08-.33-.08-.68-.08-1.14V6.2q0-.82.03-1.37.03-.57.27-1.08.4-.8 1.2-1.2.51-.24 1.08-.27.55-.04 1.37-.03zM6.2 3.75c-.57 0-.96 0-1.25.02s-.43.07-.52.12q-.35.18-.54.54c-.05.1-.1.23-.12.52s-.02.68-.02 1.25v5.47c0 .53 0 .67.03.8q.05.18.15.35c.07.11.17.22.54.59l6.3 6.3c.4.4.67.67.9.87q.32.25.44.28.39.12.78 0 .13-.03.44-.28c.23-.2.5-.47.9-.87l5.48-5.48c.4-.4.67-.67.87-.9q.25-.32.28-.44.12-.39 0-.78c-.03-.1-.1-.22-.28-.44-.2-.23-.47-.5-.87-.9l-6.3-6.3a4 4 0 0 0-.59-.54 1 1 0 0 0-.36-.15 4 4 0 0 0-.79-.03z" clipRule="evenodd" />
    </IconBase>
  ))
);

TagRegular.displayName = 'TagRegular';

// Triple export pattern (lucide-react style)
export { TagRegular, TagRegular as TagRegularIcon, TagRegular as SiTagRegular };
export type { TagRegularProps };
