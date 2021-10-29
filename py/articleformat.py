file = open("article.txt", "r")
article = file.read().split("\n")
file.close()

farticle = []

for line in article:
    if line != "":
        farticle.append(f"<p>{line}</p>")

farticle = "\n".join(farticle)

file = open("farticle.txt", "a")
file.write(farticle)
file.close()