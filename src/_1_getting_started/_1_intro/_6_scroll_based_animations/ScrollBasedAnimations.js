import { useTransform, useViewportScroll, motion } from 'framer-motion'

import Wrapper from '../../../components/wrapper/Wrapper'

// https://codesandbox.io/s/day-16-useviewportscroll-v12ct?file=/src/index.tsx:395-452

const ScrollBasedAnimations = () => {
  const { scrollYProgress } = useViewportScroll()

  // const initial = useTransform(scrollYProgress, (x) => {
  //   return x + 0.05
  // })

  scrollYProgress.onChange((x) => {
    console.log('scrollYProgress: ', x)
  })

  // console.log('initial: ', initial.get())

  return (
    <Wrapper>
      <div style={{ padding: '4rem', position: 'relative' }}>
        <motion.div 
          style={{
            width: '800px',
            height: '2px',
            position: 'fixed',
            background: '#05F',
            // scaleX: initial,
            scaleX: scrollYProgress,
            originX: 0
          }}
        />
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          eros eu orci condimentum fermentum. Nam vehicula nunc et nisi pretium,
          sit amet commodo erat dapibus.
        </p>
        <p>
          Cras eu orci mollis, varius erat at, volutpat dolor. Proin a tortor
          vel tellus sodales vehicula a at dui. Nam interdum condimentum dolor,
          quis gravida dolor dapibus ac. Aliquam metus est, sagittis eget
          convallis eget, ornare a lorem.
        </p>
        <p>
          Fusce sit amet augue nec libero vestibulum fermentum vel in nunc. Cras
          vulputate at felis nec venenatis. Pellentesque sollicitudin id nisl ac
          tristique. Nam pellentesque, quam eu egestas ultricies, tellus odio
          iaculis felis, ut maximus ipsum ligula at purus.
        </p>
        <p>
          Nam scelerisque eget augue sed molestie. Nam et ullamcorper mauris, ac
          bibendum sem. Aliquam massa ante, aliquam eget velit a, sagittis
          fringilla magna. Suspendisse felis lacus, mattis in magna ut, porta
          scelerisque lacus. Nunc eget ultricies libero, eu cursus dui.
        </p>
        <p>
          Vivamus ac leo accumsan, tempor tortor quis, rutrum magna. Aliquam in
          nibh ex. Morbi et nibh erat. Nulla at eros vitae purus varius egestas.
        </p>
        <p>
          Vestibulum placerat porttitor posuere. Mauris auctor tristique neque,
          vel blandit ipsum mattis id. Morbi in ipsum et dui vehicula
          pellentesque.
        </p>
        <p>
          Phasellus convallis ligula sit amet pulvinar sollicitudin. Ut luctus
          vitae quam in suscipit. Donec auctor feugiat accumsan. Phasellus
          mollis feugiat tincidunt. Cras ullamcorper metus et commodo lobortis.
        </p>
        <p>
          Etiam erat nulla, maximus vitae hendrerit at, accumsan vitae augue.
          Sed sit amet diam sit amet dui ullamcorper mattis quis et urna. Ut
          lectus eros, consequat at rhoncus et, ultricies at nunc.
        </p>
        <p>
          Ut ut urna ligula. Fusce lacinia efficitur enim id ultrices. Mauris
          sagittis orci et sapien feugiat, eget tincidunt lectus tristique. Cras
          leo augue, blandit sed ipsum convallis, ultricies dictum felis.
        </p>
        <p>
          Aliquam lobortis tempus lectus, at tincidunt tellus hendrerit ut. Ut
          pharetra, nisl vitae pretium lobortis, ante nisl pellentesque felis,
          at lobortis felis nunc vitae libero.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          eros eu orci condimentum fermentum. Nam vehicula nunc et nisi pretium,
          sit amet commodo erat dapibus.
        </p>
        <p>
          Cras eu orci mollis, varius erat at, volutpat dolor. Proin a tortor
          vel tellus sodales vehicula a at dui. Nam interdum condimentum dolor,
          quis gravida dolor dapibus ac. Aliquam metus est, sagittis eget
          convallis eget, ornare a lorem.
        </p>
        <p>
          Fusce sit amet augue nec libero vestibulum fermentum vel in nunc. Cras
          vulputate at felis nec venenatis. Pellentesque sollicitudin id nisl ac
          tristique. Nam pellentesque, quam eu egestas ultricies, tellus odio
          iaculis felis, ut maximus ipsum ligula at purus.
        </p>
        <p>
          Nam scelerisque eget augue sed molestie. Nam et ullamcorper mauris, ac
          bibendum sem. Aliquam massa ante, aliquam eget velit a, sagittis
          fringilla magna. Suspendisse felis lacus, mattis in magna ut, porta
          scelerisque lacus. Nunc eget ultricies libero, eu cursus dui.
        </p>
        <p>
          Vivamus ac leo accumsan, tempor tortor quis, rutrum magna. Aliquam in
          nibh ex. Morbi et nibh erat. Nulla at eros vitae purus varius egestas.
        </p>
        <p>
          Vestibulum placerat porttitor posuere. Mauris auctor tristique neque,
          vel blandit ipsum mattis id. Morbi in ipsum et dui vehicula
          pellentesque.
        </p>
        <p>
          Phasellus convallis ligula sit amet pulvinar sollicitudin. Ut luctus
          vitae quam in suscipit. Donec auctor feugiat accumsan. Phasellus
          mollis feugiat tincidunt. Cras ullamcorper metus et commodo lobortis.
        </p>
        <p>
          Etiam erat nulla, maximus vitae hendrerit at, accumsan vitae augue.
          Sed sit amet diam sit amet dui ullamcorper mattis quis et urna. Ut
          lectus eros, consequat at rhoncus et, ultricies at nunc.
        </p>
        <p>
          Ut ut urna ligula. Fusce lacinia efficitur enim id ultrices. Mauris
          sagittis orci et sapien feugiat, eget tincidunt lectus tristique. Cras
          leo augue, blandit sed ipsum convallis, ultricies dictum felis.
        </p>
        <p>
          Aliquam lobortis tempus lectus, at tincidunt tellus hendrerit ut. Ut
          pharetra, nisl vitae pretium lobortis, ante nisl pellentesque felis,
          at lobortis felis nunc vitae libero.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          eros eu orci condimentum fermentum. Nam vehicula nunc et nisi pretium,
          sit amet commodo erat dapibus.
        </p>
        <p>
          Cras eu orci mollis, varius erat at, volutpat dolor. Proin a tortor
          vel tellus sodales vehicula a at dui. Nam interdum condimentum dolor,
          quis gravida dolor dapibus ac. Aliquam metus est, sagittis eget
          convallis eget, ornare a lorem.
        </p>
        <p>
          Fusce sit amet augue nec libero vestibulum fermentum vel in nunc. Cras
          vulputate at felis nec venenatis. Pellentesque sollicitudin id nisl ac
          tristique. Nam pellentesque, quam eu egestas ultricies, tellus odio
          iaculis felis, ut maximus ipsum ligula at purus.
        </p>
        <p>
          Nam scelerisque eget augue sed molestie. Nam et ullamcorper mauris, ac
          bibendum sem. Aliquam massa ante, aliquam eget velit a, sagittis
          fringilla magna. Suspendisse felis lacus, mattis in magna ut, porta
          scelerisque lacus. Nunc eget ultricies libero, eu cursus dui.
        </p>
        <p>
          Vivamus ac leo accumsan, tempor tortor quis, rutrum magna. Aliquam in
          nibh ex. Morbi et nibh erat. Nulla at eros vitae purus varius egestas.
        </p>
        <p>
          Vestibulum placerat porttitor posuere. Mauris auctor tristique neque,
          vel blandit ipsum mattis id. Morbi in ipsum et dui vehicula
          pellentesque.
        </p>
        <p>
          Phasellus convallis ligula sit amet pulvinar sollicitudin. Ut luctus
          vitae quam in suscipit. Donec auctor feugiat accumsan. Phasellus
          mollis feugiat tincidunt. Cras ullamcorper metus et commodo lobortis.
        </p>
        <p>
          Etiam erat nulla, maximus vitae hendrerit at, accumsan vitae augue.
          Sed sit amet diam sit amet dui ullamcorper mattis quis et urna. Ut
          lectus eros, consequat at rhoncus et, ultricies at nunc.
        </p>
        <p>
          Ut ut urna ligula. Fusce lacinia efficitur enim id ultrices. Mauris
          sagittis orci et sapien feugiat, eget tincidunt lectus tristique. Cras
          leo augue, blandit sed ipsum convallis, ultricies dictum felis.
        </p>
        <p>
          Aliquam lobortis tempus lectus, at tincidunt tellus hendrerit ut. Ut
          pharetra, nisl vitae pretium lobortis, ante nisl pellentesque felis,
          at lobortis felis nunc vitae libero.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          eros eu orci condimentum fermentum. Nam vehicula nunc et nisi pretium,
          sit amet commodo erat dapibus.
        </p>
        <p>
          Cras eu orci mollis, varius erat at, volutpat dolor. Proin a tortor
          vel tellus sodales vehicula a at dui. Nam interdum condimentum dolor,
          quis gravida dolor dapibus ac. Aliquam metus est, sagittis eget
          convallis eget, ornare a lorem.
        </p>
        <p>
          Fusce sit amet augue nec libero vestibulum fermentum vel in nunc. Cras
          vulputate at felis nec venenatis. Pellentesque sollicitudin id nisl ac
          tristique. Nam pellentesque, quam eu egestas ultricies, tellus odio
          iaculis felis, ut maximus ipsum ligula at purus.
        </p>
        <p>
          Nam scelerisque eget augue sed molestie. Nam et ullamcorper mauris, ac
          bibendum sem. Aliquam massa ante, aliquam eget velit a, sagittis
          fringilla magna. Suspendisse felis lacus, mattis in magna ut, porta
          scelerisque lacus. Nunc eget ultricies libero, eu cursus dui.
        </p>
        <p>
          Vivamus ac leo accumsan, tempor tortor quis, rutrum magna. Aliquam in
          nibh ex. Morbi et nibh erat. Nulla at eros vitae purus varius egestas.
        </p>
        <p>
          Vestibulum placerat porttitor posuere. Mauris auctor tristique neque,
          vel blandit ipsum mattis id. Morbi in ipsum et dui vehicula
          pellentesque.
        </p>
        <p>
          Phasellus convallis ligula sit amet pulvinar sollicitudin. Ut luctus
          vitae quam in suscipit. Donec auctor feugiat accumsan. Phasellus
          mollis feugiat tincidunt. Cras ullamcorper metus et commodo lobortis.
        </p>
        <p>
          Etiam erat nulla, maximus vitae hendrerit at, accumsan vitae augue.
          Sed sit amet diam sit amet dui ullamcorper mattis quis et urna. Ut
          lectus eros, consequat at rhoncus et, ultricies at nunc.
        </p>
        <p>
          Ut ut urna ligula. Fusce lacinia efficitur enim id ultrices. Mauris
          sagittis orci et sapien feugiat, eget tincidunt lectus tristique. Cras
          leo augue, blandit sed ipsum convallis, ultricies dictum felis.
        </p>
        <p>
          Aliquam lobortis tempus lectus, at tincidunt tellus hendrerit ut. Ut
          pharetra, nisl vitae pretium lobortis, ante nisl pellentesque felis,
          at lobortis felis nunc vitae libero.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          eros eu orci condimentum fermentum. Nam vehicula nunc et nisi pretium,
          sit amet commodo erat dapibus.
        </p>
        <p>
          Cras eu orci mollis, varius erat at, volutpat dolor. Proin a tortor
          vel tellus sodales vehicula a at dui. Nam interdum condimentum dolor,
          quis gravida dolor dapibus ac. Aliquam metus est, sagittis eget
          convallis eget, ornare a lorem.
        </p>
        <p>
          Fusce sit amet augue nec libero vestibulum fermentum vel in nunc. Cras
          vulputate at felis nec venenatis. Pellentesque sollicitudin id nisl ac
          tristique. Nam pellentesque, quam eu egestas ultricies, tellus odio
          iaculis felis, ut maximus ipsum ligula at purus.
        </p>
        <p>
          Nam scelerisque eget augue sed molestie. Nam et ullamcorper mauris, ac
          bibendum sem. Aliquam massa ante, aliquam eget velit a, sagittis
          fringilla magna. Suspendisse felis lacus, mattis in magna ut, porta
          scelerisque lacus. Nunc eget ultricies libero, eu cursus dui.
        </p>
        <p>
          Vivamus ac leo accumsan, tempor tortor quis, rutrum magna. Aliquam in
          nibh ex. Morbi et nibh erat. Nulla at eros vitae purus varius egestas.
        </p>
        <p>
          Vestibulum placerat porttitor posuere. Mauris auctor tristique neque,
          vel blandit ipsum mattis id. Morbi in ipsum et dui vehicula
          pellentesque.
        </p>
        <p>
          Phasellus convallis ligula sit amet pulvinar sollicitudin. Ut luctus
          vitae quam in suscipit. Donec auctor feugiat accumsan. Phasellus
          mollis feugiat tincidunt. Cras ullamcorper metus et commodo lobortis.
        </p>
        <p>
          Etiam erat nulla, maximus vitae hendrerit at, accumsan vitae augue.
          Sed sit amet diam sit amet dui ullamcorper mattis quis et urna. Ut
          lectus eros, consequat at rhoncus et, ultricies at nunc.
        </p>
        <p>
          Ut ut urna ligula. Fusce lacinia efficitur enim id ultrices. Mauris
          sagittis orci et sapien feugiat, eget tincidunt lectus tristique. Cras
          leo augue, blandit sed ipsum convallis, ultricies dictum felis.
        </p>
        <p>
          Aliquam lobortis tempus lectus, at tincidunt tellus hendrerit ut. Ut
          pharetra, nisl vitae pretium lobortis, ante nisl pellentesque felis,
          at lobortis felis nunc vitae libero.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          eros eu orci condimentum fermentum. Nam vehicula nunc et nisi pretium,
          sit amet commodo erat dapibus.
        </p>
        <p>
          Cras eu orci mollis, varius erat at, volutpat dolor. Proin a tortor
          vel tellus sodales vehicula a at dui. Nam interdum condimentum dolor,
          quis gravida dolor dapibus ac. Aliquam metus est, sagittis eget
          convallis eget, ornare a lorem.
        </p>
        <p>
          Fusce sit amet augue nec libero vestibulum fermentum vel in nunc. Cras
          vulputate at felis nec venenatis. Pellentesque sollicitudin id nisl ac
          tristique. Nam pellentesque, quam eu egestas ultricies, tellus odio
          iaculis felis, ut maximus ipsum ligula at purus.
        </p>
        <p>
          Nam scelerisque eget augue sed molestie. Nam et ullamcorper mauris, ac
          bibendum sem. Aliquam massa ante, aliquam eget velit a, sagittis
          fringilla magna. Suspendisse felis lacus, mattis in magna ut, porta
          scelerisque lacus. Nunc eget ultricies libero, eu cursus dui.
        </p>
        <p>
          Vivamus ac leo accumsan, tempor tortor quis, rutrum magna. Aliquam in
          nibh ex. Morbi et nibh erat. Nulla at eros vitae purus varius egestas.
        </p>
        <p>
          Vestibulum placerat porttitor posuere. Mauris auctor tristique neque,
          vel blandit ipsum mattis id. Morbi in ipsum et dui vehicula
          pellentesque.
        </p>
        <p>
          Phasellus convallis ligula sit amet pulvinar sollicitudin. Ut luctus
          vitae quam in suscipit. Donec auctor feugiat accumsan. Phasellus
          mollis feugiat tincidunt. Cras ullamcorper metus et commodo lobortis.
        </p>
        <p>
          Etiam erat nulla, maximus vitae hendrerit at, accumsan vitae augue.
          Sed sit amet diam sit amet dui ullamcorper mattis quis et urna. Ut
          lectus eros, consequat at rhoncus et, ultricies at nunc.
        </p>
        <p>
          Ut ut urna ligula. Fusce lacinia efficitur enim id ultrices. Mauris
          sagittis orci et sapien feugiat, eget tincidunt lectus tristique. Cras
          leo augue, blandit sed ipsum convallis, ultricies dictum felis.
        </p>
        <p>
          Aliquam lobortis tempus lectus, at tincidunt tellus hendrerit ut. Ut
          pharetra, nisl vitae pretium lobortis, ante nisl pellentesque felis,
          at lobortis felis nunc vitae libero.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          eros eu orci condimentum fermentum. Nam vehicula nunc et nisi pretium,
          sit amet commodo erat dapibus.
        </p>
        <p>
          Cras eu orci mollis, varius erat at, volutpat dolor. Proin a tortor
          vel tellus sodales vehicula a at dui. Nam interdum condimentum dolor,
          quis gravida dolor dapibus ac. Aliquam metus est, sagittis eget
          convallis eget, ornare a lorem.
        </p>
        <p>
          Fusce sit amet augue nec libero vestibulum fermentum vel in nunc. Cras
          vulputate at felis nec venenatis. Pellentesque sollicitudin id nisl ac
          tristique. Nam pellentesque, quam eu egestas ultricies, tellus odio
          iaculis felis, ut maximus ipsum ligula at purus.
        </p>
        <p>
          Nam scelerisque eget augue sed molestie. Nam et ullamcorper mauris, ac
          bibendum sem. Aliquam massa ante, aliquam eget velit a, sagittis
          fringilla magna. Suspendisse felis lacus, mattis in magna ut, porta
          scelerisque lacus. Nunc eget ultricies libero, eu cursus dui.
        </p>
        <p>
          Vivamus ac leo accumsan, tempor tortor quis, rutrum magna. Aliquam in
          nibh ex. Morbi et nibh erat. Nulla at eros vitae purus varius egestas.
        </p>
        <p>
          Vestibulum placerat porttitor posuere. Mauris auctor tristique neque,
          vel blandit ipsum mattis id. Morbi in ipsum et dui vehicula
          pellentesque.
        </p>
        <p>
          Phasellus convallis ligula sit amet pulvinar sollicitudin. Ut luctus
          vitae quam in suscipit. Donec auctor feugiat accumsan. Phasellus
          mollis feugiat tincidunt. Cras ullamcorper metus et commodo lobortis.
        </p>
        <p>
          Etiam erat nulla, maximus vitae hendrerit at, accumsan vitae augue.
          Sed sit amet diam sit amet dui ullamcorper mattis quis et urna. Ut
          lectus eros, consequat at rhoncus et, ultricies at nunc.
        </p>
        <p>
          Ut ut urna ligula. Fusce lacinia efficitur enim id ultrices. Mauris
          sagittis orci et sapien feugiat, eget tincidunt lectus tristique. Cras
          leo augue, blandit sed ipsum convallis, ultricies dictum felis.
        </p>
        <p>
          Aliquam lobortis tempus lectus, at tincidunt tellus hendrerit ut. Ut
          pharetra, nisl vitae pretium lobortis, ante nisl pellentesque felis,
          at lobortis felis nunc vitae libero.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at
          eros eu orci condimentum fermentum. Nam vehicula nunc et nisi pretium,
          sit amet commodo erat dapibus.
        </p>
        <p>
          Cras eu orci mollis, varius erat at, volutpat dolor. Proin a tortor
          vel tellus sodales vehicula a at dui. Nam interdum condimentum dolor,
          quis gravida dolor dapibus ac. Aliquam metus est, sagittis eget
          convallis eget, ornare a lorem.
        </p>
        <p>
          Fusce sit amet augue nec libero vestibulum fermentum vel in nunc. Cras
          vulputate at felis nec venenatis. Pellentesque sollicitudin id nisl ac
          tristique. Nam pellentesque, quam eu egestas ultricies, tellus odio
          iaculis felis, ut maximus ipsum ligula at purus.
        </p>
        <p>
          Nam scelerisque eget augue sed molestie. Nam et ullamcorper mauris, ac
          bibendum sem. Aliquam massa ante, aliquam eget velit a, sagittis
          fringilla magna. Suspendisse felis lacus, mattis in magna ut, porta
          scelerisque lacus. Nunc eget ultricies libero, eu cursus dui.
        </p>
        <p>
          Vivamus ac leo accumsan, tempor tortor quis, rutrum magna. Aliquam in
          nibh ex. Morbi et nibh erat. Nulla at eros vitae purus varius egestas.
        </p>
        <p>
          Vestibulum placerat porttitor posuere. Mauris auctor tristique neque,
          vel blandit ipsum mattis id. Morbi in ipsum et dui vehicula
          pellentesque.
        </p>
        <p>
          Phasellus convallis ligula sit amet pulvinar sollicitudin. Ut luctus
          vitae quam in suscipit. Donec auctor feugiat accumsan. Phasellus
          mollis feugiat tincidunt. Cras ullamcorper metus et commodo lobortis.
        </p>
        <p>
          Etiam erat nulla, maximus vitae hendrerit at, accumsan vitae augue.
          Sed sit amet diam sit amet dui ullamcorper mattis quis et urna. Ut
          lectus eros, consequat at rhoncus et, ultricies at nunc.
        </p>
        <p>
          Ut ut urna ligula. Fusce lacinia efficitur enim id ultrices. Mauris
          sagittis orci et sapien feugiat, eget tincidunt lectus tristique. Cras
          leo augue, blandit sed ipsum convallis, ultricies dictum felis.
        </p>
        <p>
          Aliquam lobortis tempus lectus, at tincidunt tellus hendrerit ut. Ut
          pharetra, nisl vitae pretium lobortis, ante nisl pellentesque felis,
          at lobortis felis nunc vitae libero.
        </p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries, but
          also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset
          sheets containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem Ipsum.

        </p>
      </div>
    </Wrapper>
  )
}

export default ScrollBasedAnimations


/**
 * 
 * Create declarative, reactive chains of MotionValues that can 
 * 
 * update as a result of animations and/or gestures.
 */